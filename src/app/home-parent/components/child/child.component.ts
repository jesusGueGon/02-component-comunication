import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComunicationService } from '../../services/comunication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message: string = "CHILD USING OUTPUT EVENT";

  @Input()
  mensaje: string = '';

  @Output()
  messageEvent = new EventEmitter<string>();



  sendMessageInOut() {
    this.messageEvent.emit(this.message);
  }

  // A partir de aqui se comunica con Observables

  private subscription: Subscription;

  // importamos el servicio y nos suscribimos al obvservable message,
  // que es el que contiene la información del mensaje del padre
  // una vez suscrito establece el mensaje a la variable mensaje y se muestra en pantalla
  constructor(private comunicationService: ComunicationService){
    this.subscription = this.comunicationService.message$.subscribe( ( message ) => {
      this.mensaje = message;
    });

  }

  sendResponseObservable() {
    const response = 'CHILD USING SUBJECT';
    this.comunicationService.sendResponse(response);
  }

  sendResponseService() {
    const response = 'CHILD USING SERVICE';
    this.comunicationService.sendResponse(response);
  }

  // este metodo se desuscribe del observable, para no estar enviando datos innecesarios todo el rato
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
