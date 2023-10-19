import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
 
  constructor(private http: HttpClient) { }

  retriveAllTodos(username: any){
    return this.http.get<Todo[]>(`http://localhost:8082/api/todo/${username}`);
  }

  deleteTodos(username: any, id: any){
    return this.http.delete(`http://localhost:8082/api/todo/${username}/${id}`);
  }


  retriveTodo(username: any, id: any){
    return this.http.get<Todo>(`http://localhost:8082/api/todo/${username}/${id}`);
  }

  updateTodo(username: any, id: any, todo: any){
    return this.http.put<Todo>(`http://localhost:8082/api/todo/${username}/${id}`, todo);
  }

  createTodo(username: any, todo: any){
    return this.http.post(`http://localhost:8082/api/todo/${username}`, todo);
  }
}
