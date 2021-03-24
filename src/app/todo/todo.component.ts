import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [
    new Todo(1,"Finish up coding","I have to finish up on todays content before 3pm", new Date(2021,4,13)),
    new Todo(2,"Watch a movie","I realised that I never completed watching Friends", new Date(2021,4,15)),
    new Todo(3,"Play basketball","I have plans to go to the basketball court and play a little", new Date(2021,4,15)),
    new Todo(4,"Play playstation","I really missed playing some fifa", new Date(2021,5,15)),
    new Todo(5,"Do some cleaning","Wow! My house is really a mess", new Date(2021,4,17)),
    new Todo(6,"Have a snack","I think am have some munchies", new Date(2021,4,12)),
  ];

  toggleDetails(index: number){
    this.todos[index].showTodo = !this.todos[index].showTodo
  };

  completeTodo(isComplete: boolean, index: number){
    if (isComplete){
      this.todos.splice(index,1)
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
