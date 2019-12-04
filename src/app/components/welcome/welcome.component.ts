import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  links:{title:string,path:string}[] = [
    {
      title: 'Tareas',
      path: 'list'
    },
    {
      title: 'Pregunta',
      path: 'test'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
