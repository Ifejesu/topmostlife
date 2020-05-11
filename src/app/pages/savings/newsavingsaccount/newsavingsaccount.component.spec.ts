import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsavingsaccountComponent } from './newsavingsaccount.component';

describe('NewsavingsaccountComponent', () => {
  let component: NewsavingsaccountComponent;
  let fixture: ComponentFixture<NewsavingsaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsavingsaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsavingsaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
