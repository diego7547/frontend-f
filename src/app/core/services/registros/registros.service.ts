import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Registro } from '../../models/registro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  constructor(private http:HttpClient) { }


  
  findAll(){
    return this.http.get(`${environment.apiURL}/registros`);
  }

  findOne(id:number){
    return this.http.get<Registro>(`${environment.apiURL}/registros/${id}`);
  }

  insertOrUpdate(registro :Registro){
    if(registro.idRegistro){
      return this.http.put(`${environment.apiURL}/registros/${registro.idRegistro}`,registro);
    }else{
      return this.http.post(`${environment.apiURL}/registros`,registro);
    }
  }

    delete(id:number){
        return this.http.delete(`${environment.apiURL}/registros/${id}`);  
    }
}
