import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetqtnComponent } from './getqtn.component';

describe('GetqtnComponent', () => {
  let component: GetqtnComponent;
  let fixture: ComponentFixture<GetqtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetqtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetqtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
