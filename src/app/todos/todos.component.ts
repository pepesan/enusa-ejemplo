import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent{
  public cadena: string;
  public todo: Todo;
  public todos: Todo[];
  public lastId: number;
  constructor() {
    this.cadena = "hola";
    this.todo = new Todo();
    this.todo.text = "texto";
    this.todos=[
      {
        id: 1,
        text:"Hacer la compra"
      },
      {
        id: 2,
        text: "Revisar el coche"
      },
      {
        id: 3,
        text: "Llevar al niño a Karate"
      }
    ];
    this.lastId = 3;
  }

  addTodo() {
    console.log("Evento submit");
    this.lastId++;
    this.todo.id= this.lastId;
    this.todos.push(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(texto: string){
    for(var i=0;i<this.todos.length;i++){
      var todo=this.todos[i];
      if(todo.text==texto){
        this.todos.splice(i,1);
      }
    }
  }
}
