import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

export interface ToDo {
  id?: string;
  text: string;
  isCompleted: boolean;
}

export interface CreateResponse {
  name: string;
}

@Injectable({
  providedIn: "root"
})
export class TodoService {
  static url: string = "https://todo-9554e-default-rtdb.firebaseio.com/todo";

  public todoList: BehaviorSubject<ToDo[]> = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(`${TodoService.url}.json`).pipe(
      map(todos => {
        if (!todos) {
          return [];
        }
        return Object.keys(todos).map(key => ({ ...todos[key], id: key }));
      })
    );
  }

  addTodo(todo: ToDo): Observable<ToDo> {
    return this.httpClient
      .post<CreateResponse>(`${TodoService.url}.json`, todo)
      .pipe(
        map(res => {
          console.log("response: ", res);
          return { ...todo, id: res.name };
        })
      );
  }

  updateTodo(todo: ToDo): Observable<any> {
    return this.httpClient.patch(`${TodoService.url}/${todo.id}.json`, todo);
  }
}
