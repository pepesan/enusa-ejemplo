import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public cadena: string;
  private _numero: number;
  constructor() {
    console.log("TodoService arrancado");
    this.cadena = "valor";
    this._numero = 5;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }
}
