import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ScheduleComponent } from './components/schedule/schedule.component';



const routes: Routes = [
  {
    path:'',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'list',
    component: TareasComponent
  },
  {
    path: 'contact',
    component: ScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
