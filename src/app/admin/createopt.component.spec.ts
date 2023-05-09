import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateoptComponent } from './createopt.component';

describe('CreateoptComponent', () => {
  let component: CreateoptComponent;
  let fixture: ComponentFixture<CreateoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateoptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
