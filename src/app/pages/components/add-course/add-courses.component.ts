import { Component, Input } from '@angular/core';
import { CoursesServices } from 'src/app/commons/services/courses.services';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
})
export class AddCoursesComponent {
    
  @Input() course!:any; 
   
  constructor(public courseService: CoursesServices){ }
    
}
