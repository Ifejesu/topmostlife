import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcontributionComponent } from './newcontribution.component';

describe('NewcontributionComponent', () => {
  let component: NewcontributionComponent;
  let fixture: ComponentFixture<NewcontributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcontributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcontributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
