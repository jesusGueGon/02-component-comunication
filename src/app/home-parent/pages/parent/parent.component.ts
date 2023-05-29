import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor(){}

  parentMessage:string = '';

  message: string = '';

  receiveMessageInOut(event: string) {
    this.message = event;
  }

  enviarMensajeInOut() {
    this.parentMessage = 'PARENT USING INPUT PROPERTY';
  }

}
