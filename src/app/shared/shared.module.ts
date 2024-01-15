import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from '../components/modal/modal.component';




import { DialogModule } from 'primeng/dialog';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import { ButtonModule } from 'primeng/button';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';

import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    
    ModalComponent,
   
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
    
  ],exports:[
   
    ModalComponent,
    
   
  ]
})
export class SharedModule { }
