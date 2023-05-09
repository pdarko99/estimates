import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdateqtnComponent } from './adminupdateqtn.component';

describe('AdminupdateqtnComponent', () => {
  let component: AdminupdateqtnComponent;
  let fixture: ComponentFixture<AdminupdateqtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminupdateqtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdateqtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
