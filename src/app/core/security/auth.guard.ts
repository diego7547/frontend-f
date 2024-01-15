import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { async } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn =  (route, state) => {
  return isValid();
  
};
function isValid (){
  const service  = inject(LoginService);
  const route = inject(Router);
  const tokenKey = inject(CookieService);
  if(tokenKey.get("token")){
    return  service.verificarToken(tokenKey.get("token")).toPromise().then((isValid)=>{
      if(isValid?.status){
      return true;
      }else{
        route.navigate(['/login/auth']);
        return false;
      }
    })
  }else{
    route.navigate(['/login/auth']);
    return false;
  }
}

