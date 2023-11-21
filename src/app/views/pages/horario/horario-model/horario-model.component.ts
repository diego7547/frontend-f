import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Horario, diaSemanal } from 'src/app/core/models/horario';
import { HorarioService } from 'src/app/core/services/horario/horario.service';

@Component({
  selector: 'app-horario-model',
  templateUrl: './horario-model.component.html',
  styleUrls: ['./horario-model.component.scss']
})
export class HorarioModelComponent implements OnInit{
  formData!:FormGroup;
  @Input() formDataEdit!:Horario;
  @Input() showModel!:boolean;
  @Output() cancelEdit = new EventEmitter<boolean>;
  // valor predeterminado 
  @Output() statusFormEdit = new EventEmitter<Horario>;
  @Input() isUpdateOrInsert!:boolean;
    rolesList = ['LUNES','MARTES','MIERCOLES','JUEVES','VIERNES']
 
    constructor(private fb:FormBuilder,private service:HorarioService){}
  


  ngOnInit(): void {
    this.formData = this.initForm();
    
  }

  initForm(){
    return this.fb.group({
     idHorario:[''],
     hdiHorario:['',[Validators.required]],
     hdsHorario:['',[Validators.required]],
     dniPersonal:['',[Validators.required]],
     dsHorario:['',[Validators.required]]
  
    });
    
  }

  ngOnChanges(){
    
    
      this.formData?.setValue({
        idHorario:this.formDataEdit.idHorario,
        hdiHorario:this.formDataEdit.hdiHorario,
        hdsHorario:this.formDataEdit.hdsHorario,
        dniPersonal:this.formDataEdit.dniPersonal,
        dsHorario:this.formDataEdit.dsHorario
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
    this.showModel = false;
    this.cancelEdit.emit(false);
    this.statusFormEdit.emit(
     { idHorario:0,
      dniPersonal:'',
      dsHorario:diaSemanal.LUNES,
      hdiHorario:'',
      hdsHorario:'',
      nomPersonal:''}
    );
    
  }


}
