import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoService } from './todo.service';

@Component (
  {
    selector: 'my-app',
    template: `
      <h1>{{ title }}</h1>
      <h2>Mis pendientes</h2>
      <ul class="todos">
        <li *ngFor="let todo of todos"
            [class.selected]="todo === selectedTodo"
            (click)="onSelect(todo)">
          <span>{{ todo.id }} </span>{{ todo.title }}
        </li>
      </ul>
      <my-todo-detail [todo]="selectedTodo"></my-todo-detail>
    `,
    styles: [`
      .selected{
        background-color:#336699;
        color:#fff
      }

      .todos{
        margin: .5em;
      }

      .todos-li{
        cursor: pointer;
        position: relative;
        left:0;
        background-color: DarkSeaGreen;
        border-radius: 4px;
        height; 1.6em;
        padding: .3em 0;
        margin: .5em;
      }
      .edit{
        background-color: LightSalmon;
        float:left;
        margin-left:20px;
        border-radius: 10px;
        padding:20px;
        border:1px solid #ccc;
      }
      `
    ],
    directives: [TodoDetailComponent],
    providers: [TodoService]
  }
)

export class AppComponent implements OnInit{
  title = 'lista de tareas';
  todos: Todo[];
  selectedTodo: Todo;

  constructor( private todoService: TodoService){}
  getTodos(){
    this.todoService.getTodos().then(todos => this.todos = todos);
  }
  ngOnInit(){
    this.getTodos();
  }

  onSelect(todo: Todo){
    this.selectedTodo = todo;
    console.log( this.selectedTodo );
  }
}
