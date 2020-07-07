import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsWithdrawComponent } from './savings-withdraw.component';

describe('SavingsWithdrawComponent', () => {
  let component: SavingsWithdrawComponent;
  let fixture: ComponentFixture<SavingsWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
