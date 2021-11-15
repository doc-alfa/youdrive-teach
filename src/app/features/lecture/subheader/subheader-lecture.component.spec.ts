import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheaderLectureComponent } from './subheader-lecture.component';

describe('SubheaderLectureComponent', () => {
  let component: SubheaderLectureComponent;
  let fixture: ComponentFixture<SubheaderLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubheaderLectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheaderLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
