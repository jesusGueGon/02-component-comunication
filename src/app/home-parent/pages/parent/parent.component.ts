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

  constructor(private comunicationService: ComunicationService){
    this.subscription = this.comunicationService.response$.subscribe( ( response ) => {
      this.message = response;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  sendMessageObservable() {
    const message = 'PARENT USING OBSERVABLE';
    this.comunicationService.sendMessage(message);
  }


}
