import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/core/services/registros/registros.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

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
