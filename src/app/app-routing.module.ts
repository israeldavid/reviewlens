import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ultragranangular',
    loadChildren: () => import('./pages/ultragranangular/ultragranangular.module').then( m => m.UltragranangularPageModule)
  },
  {
    path: 'granangular',
    loadChildren: () => import('./pages/granangular/granangular.module').then( m => m.GranangularPageModule)
  },
  {
    path: 'telecorto',
    loadChildren: () => import('./pages/telecorto/telecorto.module').then( m => m.TelecortoPageModule)
  },
  {
    path: 'teleobjetivos',
    loadChildren: () => import('./pages/teleobjetivos/teleobjetivos.module').then( m => m.TeleobjetivosPageModule)
  },
  {
    path: 'macro',
    loadChildren: () => import('./pages/macro/macro.module').then( m => m.MacroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
