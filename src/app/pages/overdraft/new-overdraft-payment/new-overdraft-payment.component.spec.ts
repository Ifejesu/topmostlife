import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOverdraftPaymentComponent } from './new-overdraft-payment.component';

describe('NewOverdraftPaymentComponent', () => {
  let component: NewOverdraftPaymentComponent;
  let fixture: ComponentFixture<NewOverdraftPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOverdraftPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOverdraftPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
