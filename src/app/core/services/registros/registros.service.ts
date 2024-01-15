import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Registro } from '../../models/registro';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, of, zip } from 'rxjs';
import { Personal } from '../../models/personal';
import * as moment from 'moment-timezone';


@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  constructor(private http:HttpClient) { }


  
  findAll(){
    return this.http.get<{data:Registro[]}>(`${environment.apiURL}/registros`);
  }

  findOne(id:number){
    return this.http.get<Registro>(`${environment.apiURL}/registros/${id}`);
  }

  insert(registro :Registro){
   
      return this.http.post(`${environment.apiURL}/registros`,{
      
    fcRegistro:registro.fcRegistro,
    hdeRegistro:registro.hdeRegistro,
    hdsRegistro:registro.hdsRegistro,
    estRegistro:registro.estRegistro,
    dniPersonal:registro.dniPersonal,
    obsRegistro:registro.obsRegistro,
      });
  }

    delete(id:number){
        return this.http.delete(`${environment.apiURL}/registros/${id}`);  
    }

    update(registro :Registro){
     
      return this.http.put(`${environment.apiURL}/registros/${registro.idRegistro}`,{
        fcRegistro:registro.fcRegistro,
        hdeRegistro:registro.hdeRegistro,
        hdsRegistro:registro.hdsRegistro,
        estRegistro:registro.estRegistro,
        dniPersonal:registro.dniPersonal,
        obsRegistro:registro.obsRegistro,
      });  
    }

    dataDashboard(){
      return this.http.get<{registro:Registro[],personales:Personal[]}>(`${environment.apiURL}/registros`).pipe(
          mergeMap((res)=> zip(of(res),this.http.get(`${environment.apiURL}/personal`))),
          map(([registros ,personales]:any[])=>({
            registros,
            personales
          }))
      );
    }
  }
