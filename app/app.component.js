"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_detail_component_1 = require('./todo-detail.component');
var todo_service_1 = require('./todo.service');
var AppComponent = (function () {
    function AppComponent(todoService) {
        this.todoService = todoService;
        this.title = 'lista de tareas';
    }
    AppComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos().then(function (todos) { return _this.todos = todos; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    AppComponent.prototype.onSelect = function (todo) {
        this.selectedTodo = todo;
        console.log(this.selectedTodo);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <h1>{{ title }}</h1>\n      <h2>Mis pendientes</h2>\n      <ul class=\"todos\">\n        <li *ngFor=\"let todo of todos\"\n            [class.selected]=\"todo === selectedTodo\"\n            (click)=\"onSelect(todo)\">\n          <span>{{ todo.id }} </span>{{ todo.title }}\n        </li>\n      </ul>\n      <my-todo-detail [todo]=\"selectedTodo\"></my-todo-detail>\n    ",
            styles: ["\n      .selected{\n        background-color:#336699;\n        color:#fff\n      }\n\n      .todos{\n        margin: .5em;\n      }\n\n      .todos-li{\n        cursor: pointer;\n        position: relative;\n        left:0;\n        background-color: DarkSeaGreen;\n        border-radius: 4px;\n        height; 1.6em;\n        padding: .3em 0;\n        margin: .5em;\n      }\n      .edit{\n        background-color: LightSalmon;\n        float:left;\n        margin-left:20px;\n        border-radius: 10px;\n        padding:20px;\n        border:1px solid #ccc;\n      }\n      "
            ],
            directives: [todo_detail_component_1.TodoDetailComponent],
            providers: [todo_service_1.TodoService]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map