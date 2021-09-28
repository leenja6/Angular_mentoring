import { Component  } from '@angular/core';
import { CoursesServices } from 'src/app/commons/services/courses.services';

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
})
export class PopupConfirmComponent{

 constructor(public fetchCourses: CoursesServices){}
    
    Cancel() {
       this.fetchCourses.closeModal$.next()
    }

    DeleteFilm() {
       this.fetchCourses.DeleteFilm(this.fetchCourses.coursesObj.id)
    }
}
