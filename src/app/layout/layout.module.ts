import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import { NgApexchartsModule } from "ng-apexcharts";
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgApexchartsModule,
    MatMenuModule,
    
  ],exports:[LayoutComponent],
  
})
export class LayoutModule { }
