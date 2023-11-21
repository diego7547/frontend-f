import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   let cloenReq =request;
   if(localStorage.getItem('token_personal')){
    cloenReq = request.clone({
      headers: request.headers.set('Authorization',`Bearer ${localStorage.getItem('token_personal')}`)
    })
   }

    return next.handle(cloenReq);
  }
}
