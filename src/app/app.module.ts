import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BloqueAsiganturaComponent } from './bloque-asigantura/bloque-asigantura.component';
import { BloquePreguntaComponent } from './bloque-pregunta/bloque-pregunta.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BloqueAsiganturaComponent,
    BloquePreguntaComponent,
    PreguntasComponent,
    AsignaturasComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
