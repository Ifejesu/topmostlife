import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcontributionsComponent } from './allcontributions.component';

describe('AllcontributionsComponent', () => {
  let component: AllcontributionsComponent;
  let fixture: ComponentFixture<AllcontributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcontributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcontributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
