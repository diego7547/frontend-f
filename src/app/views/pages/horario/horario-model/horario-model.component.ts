import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Horario, diaSemanal } from 'src/app/core/models/horario';
import { HorarioService } from 'src/app/core/services/horario/horario.service';
import { panelConfirmacion, panelError } from 'src/app/core/utils/panelMensage';

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
 
    constructor(private fb:FormBuilder,private serviceHorario:HorarioService,private route:Router){}
   


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

  // enviar los datos a la base de datos
  submitData(){
    let horarioData = {
      idHorario:this.formData.get('idHorario')?.value,
      hdiHorario :this.formData.get('hdiHorario')?.value,
      hdsHorario:this.formData.get('hdsHorario')?.value,
      dniPersonal:this.formData.get('dniPersonal')?.value,
      dsHorario:this.formData.get('dsHorario')?.value,
      nomPersonal:''
    }

    console.log(horarioData);
    console.log(horarioData);
     if(this.isUpdateOrInsert){
      this.serviceHorario.insertHorario(horarioData).subscribe({
        next:(status)=>{
             if(status){
            panelError('El personal no identificado ')
            this.formData.reset();
          }else{
            panelConfirmacion('Horario ha sido registrado !')
            this.cancelar();
            this.formData.reset();
          
          } 
         
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }else{
      this.serviceHorario.updateHorario(horarioData).subscribe({
        next:(status)=>{
          if(status){
            panelError('El personal o horario no identificado')
            this.formData.reset();
          }else{
            panelConfirmacion('Horario actualizado !')
            this.cancelar();
            this.formData.reset();
          }}
         ,
        error:(err)=>{
          console.log(err);
        }
      })
      

    } 
  }

  // estado del model
  initShowModel(data:boolean){
    this.showModel =data;
  }
  // cerrar el model
  cancelar(){
    this.showModel = false;
    this.formData.reset();
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
