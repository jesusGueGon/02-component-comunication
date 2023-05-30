import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  // 1. creamos dos subject, uno para que envie del padre al hijo y otro del hijo al padre
  // 2. creamos un observable, message$ utilizando el asObservable del subject para permitir
  //    que los componentes se suscriban a el y puedan recibir los mensajes
  private messageSubject = new Subject<string>();
  message$ = this.messageSubject.asObservable();

  private responseSubject = new Subject<string>();
  response$ = this.responseSubject.asObservable();

  constructor() { }

  // con este metodo enviamos el mensaje por el subject a traves del next
  sendMessage(message: string) {
    this.messageSubject.next(message);
  }

  sendResponse(response: string) {
    this.responseSubject.next(response);
  }

}
