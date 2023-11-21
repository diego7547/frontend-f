import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  status:boolean = true;

  registro(data:number){
    if(data == 1){
      this.status = true;
    }else if(data == 2){
      this.status = false;
    }
  }
}
