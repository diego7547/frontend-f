import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horario, diaSemanal } from '../../models/horario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get(`${environment.apiURL}/horario`);
  }

  insertOrUpdate(horario:Horario){
    if(horario.idHorario){
      return this.http.put(`${environment.apiURL}/horario/${horario.idHorario}`,{
        hdiHorario:horario.hdiHorario,
        hdsHorario:horario.hdsHorario,
        dniPersonal:horario.dniPersonal,
        dsHorario:horario.dsHorario
      });
    }else{
      return this.http.post(`${environment.apiURL}/horario`,{
        hdiHorario:horario.hdiHorario,
        hdsHorario:horario.hdsHorario,
        dniPersonal:horario.dniPersonal,
        dsHorario:horario.dsHorario
      });
    }
  }

  findOne(id:number){
    return this.http.get<{idHorario:number,hdiHorario:string,hdsHorario:string,nomPersonal:string,dniPersonal:string,dsHorario:diaSemanal}>(`${environment.apiURL}/horario/${id}`);
  }

  delete(id:number){
    return this.http.delete(`${environment.apiURL}/${id}`);
  }

}
