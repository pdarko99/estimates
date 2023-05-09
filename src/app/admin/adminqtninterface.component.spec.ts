import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminqtninterfaceComponent } from './adminqtninterface.component';

describe('AdminqtninterfaceComponent', () => {
  let component: AdminqtninterfaceComponent;
  let fixture: ComponentFixture<AdminqtninterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminqtninterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminqtninterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
