import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloangularService {

  constructor() { }

  public getHello() {
    return "Hello Angular";
  }
}
