import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdateoptComponent } from './adminupdateopt.component';

describe('AdminupdateoptComponent', () => {
  let component: AdminupdateoptComponent;
  let fixture: ComponentFixture<AdminupdateoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminupdateoptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdateoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
