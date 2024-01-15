import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { NgApexchartsModule } from "ng-apexcharts";
import {MatCardModule} from '@angular/material/card';
import { DashboardModalComponent } from './dashboard-modal/dashboard-modal.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    
  ]
})
export class DashboardModule { }
