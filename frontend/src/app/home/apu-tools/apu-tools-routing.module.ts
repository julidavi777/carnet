import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApuToolListComponent } from './apu-tool-list/apu-tool-list.component';
import { ApuToolFormComponent } from './apu-tool-form/apu-tool-form.component';

const routes: Routes = [
  {
    path: '',
    component: ApuToolListComponent,
  },
  { path: 'create', component: ApuToolFormComponent },
  { path: 'edit/:id', component: ApuToolFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApuToolsPageRoutingModule {}
