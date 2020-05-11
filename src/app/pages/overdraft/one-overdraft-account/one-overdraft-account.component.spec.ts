import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOverdraftAccountComponent } from './one-overdraft-account.component';

describe('OneOverdraftAccountComponent', () => {
  let component: OneOverdraftAccountComponent;
  let fixture: ComponentFixture<OneOverdraftAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneOverdraftAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOverdraftAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
