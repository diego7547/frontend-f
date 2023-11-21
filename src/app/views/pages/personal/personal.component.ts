import { Component, OnInit } from '@angular/core';
import { PersonalService } from 'src/app/core/services/personal/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  ShowModel!:boolean;
  // registrar o actualizar 
  isUpdateOrInsert:boolean = true; // por defecto registra
  
  // model edit
  edit(){
    this.ShowModel=true;
    this.isUpdateOrInsert =false;
  }

  // estado del model edit 
  isShowModel(data:boolean){
    this.ShowModel =data;
    // estado de la variable 
    this.isUpdateOrInsert =true;
  }

 
  

}
