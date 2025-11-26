import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs';
import { TodoItemCom } from '../../Component/todo-item-com/todo-item-com';
import { Todo } from '../../Model/todo.type';
import { SearchPipePipe } from '../../Pipes/search-pipe-pipe';
import { TodoService } from '../../Service/todo-service';

@Component({
  selector: 'app-todos-component',
  imports: [TodoItemCom, FormsModule, SearchPipePipe],
  templateUrl: './todos-component.html',
  styleUrl: './todos-component.css',
})
export class TodosComponent implements OnInit {
  
  todoItem = signal <Array<Todo> >  ([])
  searchTerm = signal('')
  todoservice = inject(TodoService)

  ngOnInit(): void {
    this.loadTodos()
  }

  loadTodos(){
     this.todoservice.getAllTodos()
    .pipe(
      catchError( (err) => {
        throw err;
      } )
    )
    .subscribe({
      next: (todos) => {
          this.todoItem.set(todos)
          
      }
    });
  }


   UpdateTodoItem(todoItem: Todo) {
    this.todoItem.update((todos) => todos.map(todo => {
      if(todo.id === todoItem.id){
        return{
          ...todo, 
          completed : !todo.completed
        }
      }
      return todo ; 
    }) )
  }



}
