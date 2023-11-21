import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from 'src/app/core/services/registro/registro.service';

import Swal from 'sweetalert2';




@Component({
  selector: 'app-panel-resgitro',
  templateUrl: './panel-resgitro.component.html',
  styleUrls: ['./panel-resgitro.component.scss']
})
export class PanelResgitroComponent implements OnInit{
  @Input()
  statusRegistro!:boolean;

  constructor(private fb:FormBuilder,private service:RegistroService){}



  ngOnInit(): void {
    this.personal = this.initForm();
   
  }


  personal!:FormGroup;

  initForm(){
    return this.fb.group({
      dniPersonal:['',[Validators.required]]
    });
  }

  enviarRegistro(){
    if(this.statusRegistro){
      
        this.service.registroEntrada(this.personal.get('dniPersonal')?.value)
        .subscribe({
          next:({status,data})=> {
           if(status){
            this.panelConfirmacion(data);
            this.limpiar();
          }else{
            this.panelError(data);
            this.limpiar();
           }
         },
          error:(error)=> console.log(error)
        })
    }else{
    
      this.service.registroSalida(this.personal.get('dniPersonal')?.value)
      .subscribe({
        next:({status,data})=> { 
          if(status){
            this.panelConfirmacion(data);
            this.limpiar();
            }else{
            this.panelError(data);
            this.limpiar();
           }
         },
        error:(error)=> console.log(error)
      })
    }
  }

  
  panelConfirmacion(message:string){
    Swal.fire({
      title: "Aviso !",
      text: message,
      icon: "success"
    });
  }

  panelError(error:string){
    Swal.fire({
      title: "Aviso !",
      text: error,
      icon: "error"
    });
  }

  limpiar(){
    this.personal.get('dniPersonal')?.setValue('');
    this.personal.reset();

  }
}
