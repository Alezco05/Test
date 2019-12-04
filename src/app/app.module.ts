import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TareasModule } from './components/tareas/tareas.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TareasModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
