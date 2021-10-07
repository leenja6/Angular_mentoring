import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnEditDeleteCoursesComponent } from './btn-edit-delete-courses.component';

describe('BtnEditDeleteCoursesComponent', () => {
  let component: BtnEditDeleteCoursesComponent;
  let fixture: ComponentFixture<BtnEditDeleteCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEditDeleteCoursesComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEditDeleteCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
