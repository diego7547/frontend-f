import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioRoutinModule } from './horario-routin.module';
import { HorarioComponent } from './horario.component';
import { HorarioModelComponent } from './horario-model/horario-model.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

import {MatTableModule} from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    HorarioComponent,
    HorarioModelComponent
  ],
  imports: [
    CommonModule,
    HorarioRoutinModule,
    SharedModule,
    ReactiveFormsModule,
    TableModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule

  ],
  providers:[
    
  ]
})
export class HorarioModule { }
