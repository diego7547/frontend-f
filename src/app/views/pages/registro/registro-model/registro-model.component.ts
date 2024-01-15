import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estado, Registro } from 'src/app/core/models/registro';
import { RegistrosService } from 'src/app/core/services/registros/registros.service';
import { panelConfirmacion, panelError } from 'src/app/core/utils/panelMensage';

import * as moment from 'moment';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@Component({
  selector: 'app-registro-model',
  templateUrl: './registro-model.component.html',
  styleUrls: ['./registro-model.component.scss']
})
export class RegistroModelComponent {

  // formulatio body
  formData!:FormGroup;
 
  @Input() formDataEdit!:Registro;
  @Input() showModel!:boolean;
  @Output() cancelEdit = new EventEmitter<boolean>;
  // valor predeterminado 
  @Output() statusFormEdit = new EventEmitter<Registro>;
  @Input() isUpdateOrInsert!:boolean;
  @Output() listRegistro = new EventEmitter<Registro[]>;
  rolesList= ['PRESENTE','PERMISO','FINALIZO'];
  
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
    let registroData :Registro ={
    idRegistro:this.formData.get('idRegistro')?.value,
    fcRegistro:moment(this.formData.get('fcRegistro')?.value, 'YYYY-MM-DD').format('YYYY-MM-DD'),
    hdeRegistro:this.formData.get('hdeRegistro')?.value,
    hdsRegistro:this.formData.get('hdsRegistro')?.value,
    estRegistro:this.formData.get('estRegistro')?.value,
    dniPersonal:this.formData.get('dniPersonal')?.value,
    obsRegistro:this.formData.get('obsRegistro')?.value,
    hdtRegistro:''
    }
    
   

    if(this.isUpdateOrInsert){
      this.serviceRegistro.insert(registroData).subscribe({
        next:(res)=>{
           if(res){
            panelError('El personal no identificado ')
            this.formData.reset();
          }else{
            panelConfirmacion('Asistencia ha sido registrado !')
            this.cancelar();
            this.formData.reset();
            
          } 
          
        }
      });

    }else{
      
      this.serviceRegistro.update(registroData).subscribe({
        next:(res)=>{
           if(res){
            panelError('El personal o registro no identificado')
            this.formData.reset();
          }else{
            panelConfirmacion('registro actualizado !')
            this.cancelar();
          } 
         
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }    
    }


    ngOnChanges(){

       const  dayMothYear = (this.formDataEdit.fcRegistro.split('-'));
       
       const año =parseInt(dayMothYear[0]);
       const dia =parseInt(dayMothYear[2]);
      const mes = parseInt(dayMothYear[1]) -1;
     
      this.formData?.setValue({
          idRegistro:this.formDataEdit.idRegistro,
          fcRegistro:new Date(año, mes, dia),
         hdeRegistro:this.formDataEdit.hdeRegistro,
          hdsRegistro:this.formDataEdit.hdsRegistro,
          estRegistro:this.formDataEdit.estRegistro,
          dniPersonal:this.formDataEdit.dniPersonal,
          obsRegistro:this.formDataEdit.obsRegistro
        });
    }


      // estado del model
  initShowModel(data:boolean){
    this.showModel =data;
  }
  // cerrar el model
  cancelar(){
    this.showModel = false;
    this.cancelEdit.emit(false);
    this.formData.reset();
    this.statusFormEdit.emit({
      idRegistro:0,
    fcRegistro:'',
    hdeRegistro:'',
    hdsRegistro:'',
    estRegistro:Estado.FALTO,
    dniPersonal:'',
    obsRegistro:'',
    hdtRegistro:''
    });
    
  }
    constructor(private fb:FormBuilder,private serviceRegistro:RegistrosService){}
  }


  