import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AccesslayoutComponent } from './components/accesslayout/accesslayout.component';

@NgModule({
  declarations: [
    AccesslayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
