import { Component, input, output } from '@angular/core';
import { Todo } from '../../Model/todo.type';
import { UppercasePipePipe } from '../../Pipes/uppercase-pipe-pipe';
import { CompleteTodoDirective } from '../../directives/complete-todo-directive';
@Component({
  selector: 'app-todo-item-com',
  imports: [UppercasePipePipe, CompleteTodoDirective],
  templateUrl: './todo-item-com.html',
  styleUrl: './todo-item-com.css',
})
export class TodoItemCom {
  todo = input.required<Todo> ();
  todoToggled = output<Todo>() ;

  todoClicked(){
    
    this.todoToggled.emit(this.todo());
  }


  // todoClicked(){
  //     if(!this.todo().completed){
  //       this.todo().completed = true;
  //     }else{
  //       this.todo().completed = false;
  //     }
  // }

}
