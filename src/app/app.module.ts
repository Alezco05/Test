import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TareasModule } from './components/tareas/tareas.module';
/* import { ScheduleComponent } from './components/schedule/schedule.component';
import { AddContactComponent } from './components/schedule/add-contact/add-contact.component';
import { ListContactComponent } from './components/schedule/list-contact/list-contact.component';
 */
import { ScheduleModule } from './components/schedule/schedule.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TareasModule ,
    ScheduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
