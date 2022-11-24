import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundManagementComponent } from './refund-management.component';

describe('RefundManagementComponent', () => {
  let component: RefundManagementComponent;
  let fixture: ComponentFixture<RefundManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefundManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
