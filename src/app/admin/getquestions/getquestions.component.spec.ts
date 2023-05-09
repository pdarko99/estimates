import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetquestionsComponent } from './getquestions.component';

describe('GetquestionsComponent', () => {
  let component: GetquestionsComponent;
  let fixture: ComponentFixture<GetquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
