import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from '../components/modal/modal.component';
import { FiltroPipe } from '../core/utils/pipe/filtro.pipe';



import { DialogModule } from 'primeng/dialog';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TablePersonalComponent } from '../components/table-personal/table-personal.component';
import { TableRegistroComponent } from '../components/table-registro/table-registro.component';
import { TableHorarioComponent } from '../components/table-horario/table-horario.component';

import { ButtonModule } from 'primeng/button';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';

import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    
    ModalComponent,
    FiltroPipe,
    TablePersonalComponent,
    TableRegistroComponent,
    TableHorarioComponent
  ],
  imports: [
    CommonModule,
    
    DialogModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    

    TableModule,
    PaginatorModule,
    TagModule,
    SliderModule,
    MultiSelectModule,
    ProgressBarModule,
    ToastModule,
    ButtonModule,
    MatProgressSpinnerModule
  ],exports:[
    TableHorarioComponent,
    TablePersonalComponent,
    TableRegistroComponent,
    ModalComponent,
    FiltroPipe
   
  ]
})
export class SharedModule { }
