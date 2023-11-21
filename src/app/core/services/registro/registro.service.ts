import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Registro } from '../../models/registro';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http:HttpClient) { }


  registroEntrada(data:string){
    return this.http.post<{status:boolean,data:string}>(`${environment.apiURL}/registro`,{
      dniPersonal:data
    })
  }

  registroSalida(data:string){
    return this.http.put<{status:boolean,data:string}>(`${environment.apiURL}/registro`,{
      dniPersonal:data
    })
  }

}
