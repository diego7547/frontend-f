import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../components/table/table.component';
import { ModalComponent } from '../components/modal/modal.component';


import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    TableComponent,
    ModalComponent,
   
  ],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ButtonModule,

  ],exports:[
    TableComponent,
    ModalComponent,
    
   
  ]
})
export class SharedModule { }
