import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { WelcomeComponent } from './components/welcome/welcome.component';



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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
