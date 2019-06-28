import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainlayoutComponent } from './main/components/mainlayout/mainlayout.component';
import { NopagefoundComponent } from './shared/components/nopagefound/nopagefound.component';
import { AccesslayoutComponent } from './access/components/accesslayout/accesslayout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'access',
    pathMatch: 'full'
  },
  {
    path: 'access',
    component: AccesslayoutComponent,
    loadChildren: () => import('./access/access.module').then( mod => mod.AccessModule)
  },
  {
    path: 'home',
   component: MainlayoutComponent,
   loadChildren: () => import('./main/main.module').then( mod => mod.MainModule )
  },
  {
    path: '**',
    component: NopagefoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
