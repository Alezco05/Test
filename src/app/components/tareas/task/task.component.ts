import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interface/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task : Task;
  @Input() index : number;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() complete: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  taksCompete(){
    this.complete.emit(this.index);
  }
  taskRemove() {
    this.remove.emit(this.index);
  }

}
