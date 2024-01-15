import { CanActivateFn, Router } from '@angular/router';
import {  inject } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { CookieService } from 'ngx-cookie-service';

export const loginGuard: CanActivateFn = (route, state) => {
  return isValid();
};

function isValid (){
  const service  = inject(LoginService);
  const route = inject(Router);
  const tokenKey = inject(CookieService);
  
  if(tokenKey.get("token")){
    return  service.verificarToken(tokenKey.get("token")).toPromise().then((isValid)=>{
      if(isValid?.status){
        route.navigate(['/pages/dashboard'])
      return false;
      }else{
        return true;
      }
    })
  }else{
    return true;
  }

}


