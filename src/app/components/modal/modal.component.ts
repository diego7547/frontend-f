import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
 
  @Input() visible: boolean = false;
  @Input() formData!:string;
  @Output() modalClosed = new EventEmitter<void>();
  @Output() showModel  = new EventEmitter<boolean>;
  @Output() displayModalChange = new EventEmitter<boolean>();
  @Input() width!:string;

  showDialog() {
      this.visible = true;
      this.showModel.emit(true);
    }
    
   /**
   * Evento que se emite cuando se cierra el modal por completo.
   */

  /**
   * Función que se llama cuando el modal se oculta.
   * Emite eventos para actualizar `displayModal` y notificar que el modal se ha cerrado.
   */
  onDialogHidden() {
    this.displayModalChange.emit(false); // Notifica al componente padre que el modal se ha ocultado.
    this.modalClosed.emit(); // Notifica al componente padre que el modal se ha cerrado por

  }
}
