import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoanPaymentComponent } from './new-loan-payment.component';

describe('NewLoanPaymentComponent', () => {
  let component: NewLoanPaymentComponent;
  let fixture: ComponentFixture<NewLoanPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLoanPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLoanPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
