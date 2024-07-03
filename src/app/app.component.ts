import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodosComponent} from "./components/todos/todos.component";
import {UsaServicioComponent} from "./components/usa-servicio/usa-servicio.component";
import {PartidoListadoComponent} from "./components/partido-listado/partido-listado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodosComponent,
    UsaServicioComponent,
    PartidoListadoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'enusa-ejemplo';
}
