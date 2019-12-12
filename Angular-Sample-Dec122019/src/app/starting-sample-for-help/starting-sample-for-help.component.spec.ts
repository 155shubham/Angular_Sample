import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingSampleForHelpComponent } from './starting-sample-for-help.component';

describe('StartingSampleForHelpComponent', () => {
  let component: StartingSampleForHelpComponent;
  let fixture: ComponentFixture<StartingSampleForHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingSampleForHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingSampleForHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
