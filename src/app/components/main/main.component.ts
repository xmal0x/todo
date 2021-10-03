import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToDo, TodoService } from "src/app/services/todo.service";
import { finalize, delay } from "rxjs/operators";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  public form: FormGroup;
  public todoList: ToDo[] = [];
  public isLoading: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.form = new FormGroup({
      text: new FormControl("", Validators.required)
    });

    this.fetch();
  }

  submit() {
    const { text } = this.form.value;
    const todo: ToDo = {
      isCompleted: false,
      text
    };

    this.todoService.addTodo(todo).subscribe(
      todo => {
        console.log("new todo: ", todo);
        this.todoList.push(todo);
        this.form.reset();
      },
      err => console.error(err)
    );
    console.log(text);
  }

  updateTask(todo: ToDo): void {
    todo.isCompleted = !todo.isCompleted;
    console.log(todo);
    this.todoService.updateTodo(todo).subscribe(res => {
      console.log(res);
    });
  }

  fetch() {
    this.isLoading = true;
    this.todoService
      .getTodos()
      .pipe(delay(1500))
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(res => {
        console.log(res);
        this.todoList = res;
      });
  }
}
