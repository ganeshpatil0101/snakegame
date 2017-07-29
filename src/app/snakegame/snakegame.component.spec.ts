import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakegameComponent } from './snakegame.component';

describe('SnakegameComponent', () => {
  let component: SnakegameComponent;
  let fixture: ComponentFixture<SnakegameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakegameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakegameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
