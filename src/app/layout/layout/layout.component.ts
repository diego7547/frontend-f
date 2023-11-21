import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import{BreakpointObserver} from '@angular/cdk/layout';

 
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;


  constructor(private observer:BreakpointObserver,private cd:ChangeDetectorRef){}

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 1270px)']).subscribe(res => {
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }else{
        this.sidenav.mode='side';
        this.sidenav.open();

      }
    });
    this.cd.detectChanges();
  }
}
