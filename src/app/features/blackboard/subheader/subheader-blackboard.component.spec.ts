import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheaderBlackboardComponent } from './subheader-blackboard.component';

describe('SubheaderBlackboardComponent', () => {
  let component: SubheaderBlackboardComponent;
  let fixture: ComponentFixture<SubheaderBlackboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubheaderBlackboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheaderBlackboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
