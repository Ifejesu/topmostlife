import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOverdraftPaymentComponent } from './one-overdraft-payment.component';

describe('OneOverdraftPaymentComponent', () => {
  let component: OneOverdraftPaymentComponent;
  let fixture: ComponentFixture<OneOverdraftPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneOverdraftPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOverdraftPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
