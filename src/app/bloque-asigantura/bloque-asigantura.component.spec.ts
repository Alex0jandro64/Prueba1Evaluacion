import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueAsiganturaComponent } from './bloque-asigantura.component';

describe('BloqueAsiganturaComponent', () => {
  let component: BloqueAsiganturaComponent;
  let fixture: ComponentFixture<BloqueAsiganturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloqueAsiganturaComponent]
    });
    fixture = TestBed.createComponent(BloqueAsiganturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
