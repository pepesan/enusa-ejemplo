import { Component } from '@angular/core';
import {PartidoService} from "../../services/partido.service";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Partido} from "../../classes/partido";

@Component({
  selector: 'app-partido-listado',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './partido-listado.component.html',
  styleUrl: './partido-listado.component.scss'
})
export class PartidoListadoComponent {
  // transforma el Observable<Partido[]> a Promise<Partido[]>
  partidos: Promise<Partido[]| undefined> = this.partidoService.getData().toPromise();
  constructor(protected partidoService: PartidoService) { }
}
