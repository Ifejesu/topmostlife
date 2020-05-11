import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecontributionComponent } from './onecontribution.component';

describe('OnecontributionComponent', () => {
  let component: OnecontributionComponent;
  let fixture: ComponentFixture<OnecontributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnecontributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnecontributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
