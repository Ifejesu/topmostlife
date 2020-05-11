import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdraftPaymentComponent } from './overdraft-payment.component';

describe('OverdraftPaymentComponent', () => {
  let component: OverdraftPaymentComponent;
  let fixture: ComponentFixture<OverdraftPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdraftPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdraftPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
