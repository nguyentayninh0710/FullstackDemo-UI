import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todo/list-todo.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  id!: number;
  todo!: Todo;
  error!: string;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService.retriveTodo('nguyenhuynh', this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  save() {
    if(this.todo.description == null || this.todo.description == '')
      this.error = 'description is null';
    else{
      if(this.id === -1) {
        this.todoService.createTodo('nguyenhuynh', this.todo).subscribe(
          data => {
            this.router.navigate(['todos']);
          }
        );
      }
      else{
        this.todoService.updateTodo('nguyenhuynh', this.id, this.todo).subscribe(
          data => {
            this.todo = data;
            this.router.navigate(['todos']);
          }
        );
      }
    }


  }

}
