import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenAnswersComponent } from './chosen-answers.component';

describe('ChosenAnswersComponent', () => {
  let component: ChosenAnswersComponent;
  let fixture: ComponentFixture<ChosenAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenAnswersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
