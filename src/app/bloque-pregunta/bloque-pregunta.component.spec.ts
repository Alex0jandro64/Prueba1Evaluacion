import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloquePreguntaComponent } from './bloque-pregunta.component';

describe('BloquePreguntaComponent', () => {
  let component: BloquePreguntaComponent;
  let fixture: ComponentFixture<BloquePreguntaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloquePreguntaComponent]
    });
    fixture = TestBed.createComponent(BloquePreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
