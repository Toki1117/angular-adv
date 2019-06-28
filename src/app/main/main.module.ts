import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgressComponent } from './components/progress/progress.component';
import { Charts1Component } from './components/charts1/charts1.component';
import { SharedModule } from '../shared/shared.module';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { IncreaserComponent } from './components/increaser/increaser.component';

import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Charts1Component,
    MainlayoutComponent,
    IncreaserComponent,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ChartsModule,
    SharedModule
  ]
})
export class MainModule { }
