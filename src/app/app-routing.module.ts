import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/menu/liste-menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'liste-menu',
    loadChildren: () => import('./pages/liste-menu/liste-menu.module').then( m => m.ListeMenuPageModule)
  },
  {
    path: 'details-menu',
    loadChildren: () => import('./pages/details-menu/details-menu.module').then( m => m.DetailsMenuPageModule)
  },
  {
    path: 'juridictions',
    loadChildren: () => import('./pages/juridictions/juridictions.module').then( m => m.JuridictionsPageModule)
  },
  {
    path: 'actes',
    loadChildren: () => import('./pages/actes/actes.module').then( m => m.ActesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
