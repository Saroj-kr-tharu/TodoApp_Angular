import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../Model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  httpClient = inject(HttpClient);
  url = 'https://jsonplaceholder.typicode.com/todos';
  
  

   getAllTodos(){
   return  this.httpClient.get<Array<Todo>>(this.url);    
   }

  
}
