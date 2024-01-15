import { Component, OnInit } from '@angular/core';
import { Personal } from 'src/app/core/models/personal';
import { Registro } from 'src/app/core/models/registro';
import { RegistrosService } from 'src/app/core/services/registros/registros.service';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.scss']
})
export class DashboardModalComponent implements OnInit{
  personales:Personal[]=[];
  personal= 0;
  registros:Registro[]=[];
  permisos = 0;
  faltaron = 0;
  asistieron = 0;
  ngOnInit(): void {
    this.service.dataDashboard().subscribe({
      next:(res)=>{
      this.personales = res.personales;
      this.registros = res.registros['data'];
      this.personales.map(per => this.personal+=1);
      
       this.registros.map(reg =>{
        if(reg.estRegistro.toString() === 'PRESENTE' ||  reg.estRegistro.toString() === 'FINALIZO'){
          this.asistieron +=1;
        }else if(reg.estRegistro.toString() === 'FALTO' ){
          this.faltaron +=1;
        }else if(reg.estRegistro.toString() === 'PERMISO' ){
          this.permisos +=1;
        }
      }) 

      console.log(`asistieron :${this.asistieron}, permisos : ${this.permisos}, faltaron : ${this.faltaron}`)

    },
    error:err => console.log(err)
    });
  }

  constructor(private service:RegistrosService){}
}
