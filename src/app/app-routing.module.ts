import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursesComponent } from './pages/components/add-course/add-courses.component';
import { CoursesComponent } from './pages/components/courses/courses.component';
import { ErrorComponent } from './pages/components/error/error.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'addcourses', component: AddCoursesComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
    
export class AppRoutingModule {}
