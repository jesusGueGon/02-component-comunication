import { Component } from '@angular/core';
import { ComunicationService } from '../../services/comunication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentMessage: string = '';

  message: string = '';

  receiveMessageInOut(event: string) {
    this.message = event;
  }

  enviarMensajeInOut() {
    this.parentMessage ='PARENT USING INPUT PROPERTY';
  }

  //A partir de aqui Se usa Observables

  private subscription: Subscription;

  // instanciamos el servicio en el constructor
  constructor(private comunicationService: ComunicationService){
    this.subscription = this.comunicationService.response$.subscribe( ( response ) => {
      this.message = response;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // utilizamos este metodo para enviar el mensaje que queramos al componente hijo
  sendMessageObservable() {
    const message = 'PARENT USING SUBJECT';
    this.comunicationService.sendMessage(message);
  }

  sendMessageService() {
    const message = 'PARENT USING SERVICE';
    this.comunicationService.sendMessage(message);
  }

}
