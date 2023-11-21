import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Personal } from '../../models/personal';


@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http:HttpClient) { }


  findAll(){
    return this.http.get<Personal[]>(`${environment.apiURL}/personal`);  
  }

  findOne(id:number){
    return this.http.get<Personal>(`${environment.apiURL}/personal/${id}`);
  }


  insertOrUpdate(personal:Personal){
    if(personal.dniPersonal.length > 0){
      return this.http.put(`${environment.apiURL}/personal/${personal.dniPersonal}`,{
        nomPersonal :personal.nomPersonal,
        apePersonal:personal.apePersonal,
        direcPersonal:personal.apePersonal,
        telPersonal:personal.telPersonal,
        fnacPersonal:personal.fnacPersonal,
        rolPersonal:personal.rolPersonal
      });
    }else{
      return this.http.post(`${environment.apiURL}/personal`,{
        nomPersonal :personal.nomPersonal,
        apePersonal:personal.apePersonal,
        direcPersonal:personal.apePersonal,
        telPersonal:personal.telPersonal,
        fnacPersonal:personal.fnacPersonal,
        rolPersonal:personal.rolPersonal
      });
    }
  }


  delete(dni:string){
    return this.http.delete(`${environment.apiURL}/personal/${dni}`);
  }
}
