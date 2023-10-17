import { Component } from '@angular/core';
import { PREGUNTAS } from '../mock/listaPreguntas';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  preguntas = PREGUNTAS;
}
