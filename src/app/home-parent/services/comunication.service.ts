import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  constructor() { }


  messageToChild(): string{
    return 'PARENT USING SERVICE';
  }

  messageToParent(): string{
    return 'CHILD USING SERVICE';
  }

}
