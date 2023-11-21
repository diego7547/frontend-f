import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    return this.http.post<{token:string,status:boolean}>(`${environment.apiURL}/login`,{
      username:username,
      password :password
    })
  }

  verificarToken(){
    return this.http.get<{status:boolean}>(`${environment.apiURL}/login`);
  }
}
