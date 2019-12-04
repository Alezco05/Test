import { Component, OnInit } from '@angular/core';
import { Task } from '../../interface/Task';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  taskListComplete:Task[] = [];
  taskListNoComplete: Task[] = [];
  inputTask: boolean;
  errorInput: boolean;
  showCompleted: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  showNewTask(): void {
    this.inputTask = true;
  }
  addTask(task: string): void{ 
    if(task){
      this.taskListNoComplete.push({
        'date': new Date(),
        'description': task,
        'completed': false 
      });
      this.inputTask = false;
      this.errorInput = false;
    }
    else this.errorInput = true;
  }
  removeTask(e){
    this.taskListNoComplete.splice(e,1);
  }
  completeTask(e){
    this.taskListNoComplete[e].completed = true;
    this.taskListNoComplete[e].date = new Date();
    this.taskListComplete.push(this.taskListNoComplete[e]);
    this.taskListNoComplete.splice(e,1);
  }
  mostrarTareas(){
    this.showCompleted = !this.showCompleted;
  }
}
