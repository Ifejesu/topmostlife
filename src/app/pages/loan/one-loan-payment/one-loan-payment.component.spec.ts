import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLoanPaymentComponent } from './one-loan-payment.component';

describe('OneLoanPaymentComponent', () => {
  let component: OneLoanPaymentComponent;
  let fixture: ComponentFixture<OneLoanPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneLoanPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLoanPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
