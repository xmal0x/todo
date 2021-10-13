import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToDo } from "src/app/services/todo.service";
import { ReversePipe } from '../../pipes/ReversePipe.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() public todoList: ToDo[];
  @Input() public isCompleted: boolean = false;

  @Output() onClickEvent = new EventEmitter<ToDo>(null);

  constructor() { }

  ngOnInit() {
  }

  onClick(todo: ToDo) {
    this.onClickEvent.emit(todo);
  }

}
