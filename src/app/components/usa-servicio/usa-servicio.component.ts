import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-usa-servicio',
  standalone: true,
  imports: [],
  providers: [TodoService],
  templateUrl: './usa-servicio.component.html',
  styleUrl: './usa-servicio.component.scss'
})
export class UsaServicioComponent{

  public cadena: string;
  public numero: number;
  // A nivel de TS
  // Inyección de dependencias
  // Crea un atributo para manejar el servicio
  // e inicializa el servicio (a nivel de objeto)
  constructor(private todoService:TodoService) {
    this.cadena = this.todoService.cadena;
    this.numero = this.todoService.numero;
  }

}
