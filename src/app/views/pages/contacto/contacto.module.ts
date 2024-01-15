import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoInfoComponent } from './contacto-info/contacto-info.component';




@NgModule({
  declarations: [
    
  
    ContactoInfoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule { }
