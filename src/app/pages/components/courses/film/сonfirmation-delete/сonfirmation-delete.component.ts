import { Component } from "@angular/core";
import { CoursesServices } from "src/app/commons/services/courses.services";
import { ModalServices } from "src/app/commons/services/modal.services";

@Component({
    selector: 'confirmation-delete',
    templateUrl: './сonfirmation-delete.component.html',
})
export class ConfirmationDeleteComponent{
    constructor(public fetchCourses: CoursesServices, private modal: ModalServices ){}
    
    Cancel() {
        this.modal.closeModal()
    }

    DeleteFilm() {
        this.fetchCourses.DeleteFilm(this.modal.idCourse)
    }
}
