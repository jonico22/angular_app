import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'my-todo-detail',
  template:`
    <div *ngIf="todo" class="edit">
      <h2>Edicion de tareas</h2>
      <h3>{{ todo.title }}</h3>
      <div>
        <label>Titulo:</label>
        <input [(ngModel)]="todo.title" placeholder="name" />
      </div>
    </div>
  `
})

export class TodoDetailComponent{
  @Input() todo: Todo;
}
