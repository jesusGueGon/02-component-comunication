import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComunicationService } from '../../services/comunication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message: string = "CHILD USING OUTPUT EVENT";

  @Input() mensaje: string = '';

  @Output() messageEvent = new EventEmitter<string>();

  constructor(){}

  sendMessageInOut() {
    this.messageEvent.emit(this.message);
  }

}
