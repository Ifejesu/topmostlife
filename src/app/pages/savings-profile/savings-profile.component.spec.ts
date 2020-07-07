import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsProfileComponent } from './savings-profile.component';

describe('SavingsProfileComponent', () => {
  let component: SavingsProfileComponent;
  let fixture: ComponentFixture<SavingsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
