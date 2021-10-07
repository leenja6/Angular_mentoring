import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddCoursesComponent } from './btn-add-courses.component';

describe('BtnAddCoursesComponent', () => {
  let component: BtnAddCoursesComponent;
  let fixture: ComponentFixture<BtnAddCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAddCoursesComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAddCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
