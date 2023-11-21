import { Component, Input, OnInit } from '@angular/core';
import { Horario, diaSemanal } from 'src/app/core/models/horario';
import { HorarioService } from 'src/app/core/services/horario/horario.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent {
  formDataEdit : Horario = {
    idHorario:0,
    dniPersonal:'',
    dsHorario:diaSemanal.LUNES,
    hdiHorario:'',
    hdsHorario:'',
    nomPersonal:''
  }
 

  ShowModel!:boolean;
  // registrar o actualizar 
  isUpdateOrInsert:boolean = true; // por defecto registra
  // model edit
  edit(data:number){
    this.service.findOne(data).subscribe(
      {
        next:(res)=>{
          this.formDataEdit.idHorario = res.idHorario;
          this.formDataEdit.dsHorario = res.dsHorario;
          this.formDataEdit.dniPersonal = res.dniPersonal;
          this.formDataEdit.hdiHorario = res.hdiHorario;
          this.formDataEdit.hdsHorario = res.hdsHorario;
          this.formDataEdit.nomPersonal = res.nomPersonal;
          this.ShowModel=true;
          this.isUpdateOrInsert =false;
        },
        error: err => console.log(err)
      }
    );
  
    
  }

  // estado del model edit 
  isShowModel(data:boolean){
    this.ShowModel =data;
    // estado de la variable 
    this.isUpdateOrInsert =true;
  }

  // volver al estado estandar
  initForm(data:Horario){
    this.formDataEdit = data;
  }

constructor(private service:HorarioService){}
}
