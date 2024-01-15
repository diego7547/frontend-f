import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
   
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   let cloenReq =request;
   let tokenKey = inject(CookieService)
   if(tokenKey.get("token")){
    cloenReq = request.clone({
      headers: request.headers.set('Authorization',`Bearer ${tokenKey.get('token')}`)
    })
   }

    return next.handle(cloenReq);
  }
}
