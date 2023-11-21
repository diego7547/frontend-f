import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { PanelResgitroComponent } from './panel-resgitro/panel-resgitro.component';
import { ReactiveFormsModule } from '@angular/forms';



import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [
    PanelComponent,
    PanelResgitroComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
   
  ]
})
export class PanelModule { }
