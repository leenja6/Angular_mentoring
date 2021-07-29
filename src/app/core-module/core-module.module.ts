import { NgModule } from "@angular/core";
import { CoursesModule } from "./courses/courses.module";

@NgModule({
    imports: [CoursesModule],
    exports:[CoursesModule]
})

export class CoreModule {
    
}