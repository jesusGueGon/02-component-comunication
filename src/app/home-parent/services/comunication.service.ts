import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  private messageSubject = new Subject<string>();
  message$ = this.messageSubject.asObservable();

  private responseSubject = new Subject<string>();
  response$ = this.responseSubject.asObservable();

  constructor() { }

  sendMessage(message: string) {
    this.messageSubject.next(message);
  }

  sendResponse(response: string) {
    this.responseSubject.next(response);
  }

}
