import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeAccessGuard } from './guards/home-access.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [HomeAccessGuard]
  },

  {
    path: 'confirm-account',
    loadChildren: () => import('./confirm-account/confirm-account.module').then( m => m.ConfirmAccountPageModule)
  },
  {
    path: 'admin-oportunidad',
    loadChildren: () => import('./home/oferta-comercial/admin-oportunidad/admin-oportunidad.module').then( m => m.AdminOportunidadPageModule)
  },
  {
    path: 'pdf-estadisticas',
    loadChildren: () => import('./home/pdf-estadisticas/pdf-estadisticas.module').then( m => m.PdfEstadisticasPageModule)
  },
  // {
  //   path: 'pdf-estadisticas',
  //   loadChildren: () => import('./home/pdf-estadisticas/pdf-estadisticas.module').then( m => m.PdfEstadisticasPageModule)
  // },



  // {
  //   path: 'informes-indicadores',
  //   loadChildren: () => import('./home/informes-indicadores/informes-indicadores.module').then( m => m.InformesIndicadoresPageModule)
  // },



  /* {
    path: 'ver-cliente',
    loadChildren: () => import('./home/clientes/ver-cliente/ver-cliente.module').then( m => m.VerClientePageModule)
  }, */

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
