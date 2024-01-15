import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Personal, Rol } from 'src/app/core/models/personal';
import { PersonalService } from 'src/app/core/services/personal/personal.service';

import { panelConfirmacion, panelError } from 'src/app/core/utils/panelMensage';

import * as moment from 'moment';
@Component({
  selector: 'app-personal-modal',
  templateUrl: './personal-modal.component.html',
  styleUrls: ['./personal-modal.component.scss']
})
export class PersonalModalComponent implements OnInit{
  formData!:FormGroup;
  @Input() formDataEdit!:Personal;
  @Input() showModel!:boolean;
  @Output() cancelEdit = new EventEmitter<boolean>;
  // valor predeterminado 
  @Output() statusFormEdit = new EventEmitter<Personal>;
  @Input() isUpdateOrInsert!:boolean;
  rolesList =['DIRECTOR',"ADMINISTRACION","DOCENTE","AUXILIAR","BIBLIOTECARIO"];
  
  
  
  ngOnInit(): void {
    this.formData = this.initForm();
  }
  
  initForm(){
    return this.fb.group({
      dniPersonal:['',[Validators.required]],
      nomPersonal:['',[Validators.required,Validators.minLength(3)]],
      apePersonal:['',[Validators.required,Validators.minLength(3)]],
      direcPersonal:['',],
      telPersonal:[''],
      fnacPersonal:['',[Validators.required]],
      rolPersonal:['',[Validators.required]]
    });
  }
  
  
 
  
  

  submitData(){
    let dataPersonal = {
      dniPersonal : this.formData.get('dniPersonal')?.value,
      apePersonal : this.formData.get('apePersonal')?.value,
      nomPersonal : this.formData.get('nomPersonal')?.value,
      direcPersonal : this.formData.get('direcPersonal')?.value,
      telPersonal : this.formData.get('telPersonal')?.value,
      fnacPersonal : moment(this.formData.get('fnacPersonal')?.value, 'YYYY-MM-DD').format('YYYY-MM-DD'),
      rolPersonal : this.formData.get('rolPersonal')?.value,
    }
        
    
    if(this.isUpdateOrInsert){
         this.servicePersonal.insertPersonal(dataPersonal).subscribe({
          next:(res)=>{
              if(res){
              panelError('El personal ya esta registrado')
                this.formData.reset();
              }else{
              panelConfirmacion('Personal ha sido registrado !')
              this.cancelar(); 
              
            }       
          },
          error:(err) => console.log(err)
        }); 
      

    }else{
     this.servicePersonal.updatePersonal(dataPersonal).subscribe({
      next:(res)=>{
        if(res){
          panelError('No se encontro al personal')
            this.formData.reset();
        }else{
          panelConfirmacion('Personal ha sido actualizado !')
          this.cancelar();
          
        } 
      },
      error:(err)=> console.log(err)
     })

    } 
  }

  ngOnChanges(){
    const  dayMothYear = (this.formDataEdit.fnacPersonal.split('-'));
       
       const año =parseInt(dayMothYear[0]);
       const dia =parseInt(dayMothYear[2]);
      const mes = parseInt(dayMothYear[1]) -1;
    this.formData?.setValue({
      dniPersonal:this.formDataEdit.dniPersonal,
        nomPersonal:this.formDataEdit.nomPersonal,
        apePersonal:this.formDataEdit.apePersonal,
        direcPersonal:this.formDataEdit.direcPersonal,
        telPersonal:this.formDataEdit.telPersonal,
        fnacPersonal:new Date(año, mes, dia),
        rolPersonal:this.formDataEdit.rolPersonal
    });
   
  }
  
  initShowModel(data:boolean){
    this.showModel = data;
  }

  // cerrar el model
  cancelar(){
    this.showModel = false;
    this.cancelEdit.emit(false);
    this.formData.reset();

    this.statusFormEdit.emit(
      {
        dniPersonal:'',
        nomPersonal:'',
        apePersonal:'',
        direcPersonal:'',
        telPersonal:'',
        fnacPersonal:'',
        rolPersonal:Rol.DOCENTE
      }
    );
  }
  
  constructor(private fb:FormBuilder,private servicePersonal:PersonalService){}
}
