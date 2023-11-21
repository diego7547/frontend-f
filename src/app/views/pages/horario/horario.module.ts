import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioRoutinModule } from './horario-routin.module';
import { HorarioComponent } from './horario.component';
import { HorarioModelComponent } from './horario-model/horario-model.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HorarioComponent,
    HorarioModelComponent
  ],
  imports: [
    CommonModule,
    HorarioRoutinModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HorarioModule { }
