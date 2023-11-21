import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() visible: boolean = false;
  @Input() formData!:string;
  @Output() showModel  = new EventEmitter<boolean>;
  @Input() width!:string;

  showDialog() {
      this.visible = true;
      this.showModel.emit(true);
    }
}
