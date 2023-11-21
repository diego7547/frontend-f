import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { RegistroModelComponent } from './registro-model/registro-model.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroComponent,
    RegistroModelComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RegistroModule { }
