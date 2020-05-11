import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoanAccountComponent } from './new-loan-account.component';

describe('NewLoanAccountComponent', () => {
  let component: NewLoanAccountComponent;
  let fixture: ComponentFixture<NewLoanAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLoanAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLoanAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
