import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgressComponent } from './components/progress/progress.component';
import { Charts1Component } from './components/charts1/charts1.component';
import { SharedModule } from '../shared/shared.module';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { IncreaserComponent } from './components/increaser/increaser.component';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Charts1Component,
    MainlayoutComponent,
    IncreaserComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ChartsModule,
    SharedModule,
    FormsModule
  ]
})
export class MainModule { }
