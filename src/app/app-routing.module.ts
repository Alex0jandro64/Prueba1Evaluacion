import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BloqueAsiganturaComponent } from './bloque-asigantura/bloque-asigantura.component';
import { BloquePreguntaComponent } from './bloque-pregunta/bloque-pregunta.component';

const routes: Routes = [
  { path: 'asignaturas', component: BloqueAsiganturaComponent },
  { path: 'preguntas', component: BloquePreguntaComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
