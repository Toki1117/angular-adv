import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Charts1Component } from './components/charts1/charts1.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { ProgressComponent } from './components/progress/progress.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'charts',
    component: Charts1Component
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'settings',
    component: AccountSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
