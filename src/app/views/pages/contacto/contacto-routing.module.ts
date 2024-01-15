import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoInfoComponent } from './contacto-info/contacto-info.component';



const routes: Routes = [
 {path:'',component:ContactoInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
