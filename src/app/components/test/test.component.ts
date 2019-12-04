import { Component, OnInit } from "@angular/core";
import { ArrayType } from '@angular/compiler';

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  pregunta: string = "¿Cual es la capital de Colombia?";
  respuestaCorrecta: boolean;
  answerChoosed: boolean;
  respuestas: { answer: string, correct: boolean }[] = [
    {
      answer: "Medellín",
      correct: false
    },
    {
      answer: "Cali",
      correct: false
    },
    {
      answer: "Cartagena",
      correct: false
    },
    {
      answer: "Bogotá",
      correct: true
    }
  ];
  constructor() {}
  ngOnInit() {}
  checkAnswerIndex(index) {
    this.respuestaCorrecta = this.respuestas[index].correct;
    this.answerChoosed = true;
  }
  checkAnswerObj(resp){
    this.respuestaCorrecta = resp.correct;
    this.answerChoosed = true;
  }
  checkAnswersQuestion(): boolean{
    if(!this.pregunta) return false;    
    if(!this.respuestas || !Array.isArray(this.respuestas)) return false;
    else {
      if(!(this.respuestas.length >= 2 && this.respuestas.length <= 4)) return false;
      const correctAnswer = this.respuestas.filter(asnwer => asnwer.correct);
      if(correctAnswer.length !== 1) return false;
      else return true;
    }
  }
}
