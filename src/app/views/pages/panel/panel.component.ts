import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FechaService } from 'src/app/core/services/fecha/fecha.service';
import { RegistroService } from 'src/app/core/services/registro/registro.service';
import { panelConfirmacion, panelError } from 'src/app/core/utils/panelMensage';

import Swal from 'sweetalert2';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit{
  formData!:FormGroup;
  isEstado = true; // por defecto registra
  dateNow:Date= new Date();

  // inicializa el formulario
  initForm(){
    return this.fb.group(
      {
        dniPersonal:['',[Validators.required]]
      }
    );
  }

  ngOnInit(): void {
    this.formData = this.initForm();
    this.serviceDate.getDate().subscribe(res => {
      const dataZone = moment.tz(res, "America/Lima");
      const date = new Date(dataZone.format());
      this.dateNow = res;
      
    });
  }


  registroSubmit(){
    if(this.isEstado){
      
      this.service.registroEntrada(this.formData.get('dniPersonal')?.value)
      .subscribe({
        next:({status,data})=> {
         if(status){
          panelConfirmacion(data);
          this.limpiar();
        }else{
          panelError(data);
          this.limpiar();
         }
       },
        error:(error)=> console.log(error)
      })
  }else{
  
    this.service.registroSalida(this.formData.get('dniPersonal')?.value)
    .subscribe({
      next:({status,data})=> { 
        if(status){
          panelConfirmacion(data);
          this.limpiar();
          }else{
          panelError(data);
          this.limpiar();
         }
       },
      error:(error)=> console.log(error)
    })
  }
  }


  estado(data:number){
    if(data === 1){
      this.isEstado= true
      
    }else if(data ===2){
      this.isEstado = false;
    }
  }
  
 

  // establece el estado actual del registro
  limpiar(){
    this.formData.get('dniPersonal')?.setValue('');
    this.formData.reset();

  }

  constructor(private fb:FormBuilder,private service :RegistroService,private serviceDate:FechaService){}

}
