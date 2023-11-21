import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-modal',
  templateUrl: './personal-modal.component.html',
  styleUrls: ['./personal-modal.component.scss']
})
export class PersonalModalComponent implements OnInit{
  formData!:FormGroup;
  rolesList =['DIRECTOR','ADMINISTRADOR','DOCENTES'];
  @Input() showModel!:boolean;
  @Output() cancelEdit = new EventEmitter<boolean>;

  @Input() isUpdateOrInsert!:boolean;
  
  constructor(private fb:FormBuilder){}
  


  ngOnInit(): void {
   this.formData = this.initForm();
  }

  initForm(){
    return this.fb.group({
      dniPersonal:['',[Validators.required]],
      nomPersonal:['',[Validators.required,Validators.minLength(4)]],
      apePersonal:['',[Validators.required,Validators.minLength(4)]],
      direcPersonal:['',],
      telPersonal:[''],
      fnacPersonal:[''],
      rolPersonal:['']
    });
  }


  submitData(){
    if(this.isUpdateOrInsert){
      console.log("REGISTRAR HORARIO");
    }else{
      console.log("ACTUALIZAR HORARIO");

    }  }


   // estado del model
   initShowModel(data:boolean){
    this.showModel =data;
   
  }
  // cerrar el model
  cancelar(){
    this.showModel = false;
    this.cancelEdit.emit(false);
  }

}
