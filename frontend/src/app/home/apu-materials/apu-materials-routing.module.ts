import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApuMaterialListComponent } from './apu-material-list/apu-material-list.component';
import { ApuMaterialFormComponent } from './apu-material-form/apu-material-form.component';


const routes: Routes = [
  { path: '', component: ApuMaterialListComponent },
  { path: 'create', component: ApuMaterialFormComponent },
  { path: 'edit/:id', component: ApuMaterialFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApuMaterialsRoutingModule {}
