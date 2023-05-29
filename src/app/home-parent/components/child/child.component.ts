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

  constructor(private comunicationService: ComunicationService){
    this.subscription = this.comunicationService.message$.subscribe( ( message ) => {
      this.mensaje = message;
    });

  }

  sendResponseObservable() {
    const response = 'CHILD USING OBSERVABLE';
    this.comunicationService.sendResponse(response);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
