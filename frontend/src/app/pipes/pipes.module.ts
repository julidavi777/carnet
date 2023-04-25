import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatFileSizePipe } from './format-file-size.pipe';
import { FormatUrlPipe } from './format-url.pipe';
import { StatusSeguimientoPipe } from './status-seguimiento.pipe';



@NgModule({
  declarations: [
    FormatFileSizePipe,
    FormatUrlPipe,
    StatusSeguimientoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatFileSizePipe,
    FormatUrlPipe,
    StatusSeguimientoPipe
  ]
})
export class PipesModule { }
