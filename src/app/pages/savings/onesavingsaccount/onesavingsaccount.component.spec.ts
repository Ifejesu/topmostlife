import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesavingsaccountComponent } from './onesavingsaccount.component';

describe('OnesavingsaccountComponent', () => {
  let component: OnesavingsaccountComponent;
  let fixture: ComponentFixture<OnesavingsaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnesavingsaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnesavingsaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
