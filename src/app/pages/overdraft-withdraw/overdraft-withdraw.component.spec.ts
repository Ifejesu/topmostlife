import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdraftWithdrawComponent } from './overdraft-withdraw.component';

describe('OverdraftWithdrawComponent', () => {
  let component: OverdraftWithdrawComponent;
  let fixture: ComponentFixture<OverdraftWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdraftWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdraftWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
