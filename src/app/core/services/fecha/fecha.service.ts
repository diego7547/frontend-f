import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FechaService {
  private _dataObs!:Observable<Date>;
  constructor() { 
    this._dataObs = new Observable((observer)=>{
      setInterval(()=>{
        observer.next(new Date())
      },1000)
    })
  }
  getDate(){
    return this._dataObs;
  }
}
