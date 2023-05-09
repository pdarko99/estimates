import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateqtnComponent } from './createqtn.component';

describe('CreateqtnComponent', () => {
  let component: CreateqtnComponent;
  let fixture: ComponentFixture<CreateqtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateqtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateqtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
