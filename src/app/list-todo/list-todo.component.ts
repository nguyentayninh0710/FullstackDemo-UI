import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public target: Date
  ){}
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  todos: Todo[] = [];
  message: string = '';
  // = [ 
  //           new Todo(1, 'Learning JS', false, new Date()),
  //           new Todo(1, 'Learning Spring boot', false, new Date()),
  //           new Todo(1, 'Learning Angular', false, new Date()),
  //         ];

  // todos = [
  //   {id: 1, description: 'Learning JS'},
  //   {id: 2, description: 'Learning Spring boot'},
  //   {id: 3, description: 'Learning Angular'},
  // ];


  // todo = {
  //   id: 1,
  //   description: 'Learning JS',
  // }

  constructor(private todoService: TodoDataService, private router: Router ){}

  ngOnInit(){
   this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retriveAllTodos('nguyenhuynh').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id: any){
    console.log(id);
    this.todoService.deleteTodos('nguyenhuynh',id).subscribe(response => {
      console.log(response);
      this.message = "Delete successfully";
      this.refreshTodos();
    });
    
  }

  updateTodo(id: any){
    this.router.navigate(['/todos', id]);
  }

  createTodo(){
    this.router.navigate(['/todos', -1]);
  }

}
