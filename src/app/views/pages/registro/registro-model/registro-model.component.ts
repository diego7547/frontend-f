import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-model',
  templateUrl: './registro-model.component.html',
  styleUrls: ['./registro-model.component.scss']
})
export class RegistroModelComponent {
  formData!:FormGroup;
  @Input() showModel!:boolean;
  @Output() cancelEdit = new EventEmitter<boolean>;

  @Input() isUpdateOrInsert!:boolean;
  
  rolesList= ['FALTO','PRESENTE','PERMISO','ONOMASTICA'];
  constructor(private fb:FormBuilder){}
  


  ngOnInit(): void {
   this.formData = this.initForm();
  }

  initForm(){
    return this.fb.group({
      idRegistro:[''],
      fcRegistro:['',[Validators.required]],
      hdeRegistro:['',[Validators.required]],
      hdsRegistro:['',[Validators.required]],
      estRegistro:['',[Validators.required]],
      dniPersonal:['',[Validators.required]],
      obsRegistro:['']
    });
  }


  submitData(){
    if(this.isUpdateOrInsert){
      console.log("REGISTRAR HORARIO");
    }else{
      console.log("ACTUALIZAR HORARIO");

    }
  }

  // estado del model
  initShowModel(data:boolean){
    this.showModel =data;
   
  }
  // cerrar el model
  cancelar(){
      
    this.cancelEdit.emit(false);
  }
  
}
