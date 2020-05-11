import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLoanAccountComponent } from './one-loan-account.component';

describe('OneLoanAccountComponent', () => {
  let component: OneLoanAccountComponent;
  let fixture: ComponentFixture<OneLoanAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneLoanAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLoanAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
