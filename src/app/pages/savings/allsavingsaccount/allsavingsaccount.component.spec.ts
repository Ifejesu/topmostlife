import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsavingsaccountComponent } from './allsavingsaccount.component';

describe('AllsavingsaccountComponent', () => {
  let component: AllsavingsaccountComponent;
  let fixture: ComponentFixture<AllsavingsaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsavingsaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsavingsaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
