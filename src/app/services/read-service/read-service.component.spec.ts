import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadServiceComponent } from './read-service.component';

describe('ReadServiceComponent', () => {
  let component: ReadServiceComponent;
  let fixture: ComponentFixture<ReadServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
