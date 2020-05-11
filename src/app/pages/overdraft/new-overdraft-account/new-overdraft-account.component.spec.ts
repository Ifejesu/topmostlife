import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOverdraftAccountComponent } from './new-overdraft-account.component';

describe('NewOverdraftAccountComponent', () => {
  let component: NewOverdraftAccountComponent;
  let fixture: ComponentFixture<NewOverdraftAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOverdraftAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOverdraftAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
