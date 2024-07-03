import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Partido} from "../classes/partido";
@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  // url de acceso via get
  url: string = 'https://pactometro.cursosdedesarrollo.com/resultados.json';
  // inyección de la dependencia del servicio del HttpClient
  constructor(private _httpClient: HttpClient) {
    console.log('PartidoService inicializado...');
  }
  // función que realiza la llamada al web http server
  // devuelve un Observable<Partido[]>
  getData(): Observable<Partido[]> {
    return this._httpClient
      .get<Observable<Partido[]>>(this.url)
      .pipe(catchError(this.handleError('get', [])));
  }

  private handleError (operation = 'operation', result?: any[]) {
    return (error: any): any[] => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return [];
    };
  }
}
