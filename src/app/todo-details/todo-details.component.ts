import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo'

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() isComplete = new EventEmitter<boolean>();

  todoComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
