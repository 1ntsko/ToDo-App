import { Task } from '../model/Task';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;
  isEditEnabled: boolean = false;

  tasks: Task[] = [];
  inprogress: Task[] = [];
  done: Task[] = [];

  todos = [
    {
      name: 'ToDo',
      task: this.tasks,
    },
    {
      name: 'In Progress',
      task: this.inprogress,
    },
    {
      name: 'Done',
      task: this.done,
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item: ['', Validators.required],
    });
  }

  addTask() {
    this.tasks.push({
      description: this.todoForm.value.item,
      done: true,
    });
    this.todoForm.reset();
  }
}
