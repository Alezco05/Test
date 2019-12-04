import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TareasComponent } from './tareas.component';



@NgModule({
  declarations: [TareasComponent,TaskComponent],
  imports: [
    CommonModule,
    
  ],
  exports: [
    TareasComponent,
    TaskComponent    
  ]
})
export class TareasModule { }
