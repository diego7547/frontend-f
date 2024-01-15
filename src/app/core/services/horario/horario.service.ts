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
    return this.http.get<Horario[]>(`${environment.apiURL}/horario`);
  }



  updateHorario(horario:Horario){
    return this.http.put(`${environment.apiURL}/horario/${horario.idHorario}`,{
      hdiHorario:horario.hdiHorario,
      hdsHorario:horario.hdsHorario,
      dniPersonal:horario.dniPersonal,
      dsHorario:horario.dsHorario
    });
  }

  insertHorario(horario:Horario){
    console.log(horario.dniPersonal);
    return this.http.post(`${environment.apiURL}/horario`,{
      hdiHorario:horario.hdiHorario,
      hdsHorario:horario.hdsHorario,
      dniPersonal:horario.dniPersonal,
      dsHorario:horario.dsHorario
    });
  }

  findOne(id:number){
    return this.http.get<Horario>(`${environment.apiURL}/horario/${id}`);
  }

  delete(id:number){
    return this.http.delete(`${environment.apiURL}/horario/${id}`);
  }

}
