import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { async } from 'rxjs';

export const authGuard: CanActivateFn =  (route, state) => {
  

  return isValid();
  
   
};


function isValid (){
  const service  = inject(LoginService);
  const route = inject(Router);
  if(localStorage.getItem('token_personal')){
    return  service.verificarToken().toPromise().then((isValid)=>{
      if(isValid?.status){
      return true;
      }else{
        localStorage.removeItem('token_personal');
        route.navigate(['/login/auth']);
        return false;
        
      }
    })
  }else{
    localStorage.removeItem('token_personal');
    route.navigate(['/login/auth']);
    return false;

  }

}

