import { Component,  Input  } from '@angular/core'
import { Course } from 'src/app/commons/interface/interface'
import { ModalServices } from 'src/app/commons/services/modal.services'

@Component({
    selector: 'app-btn-edit-delete-courses',
    templateUrl: './btn-edit-delete-courses.component.html',
})
export class BtnEditDeleteCoursesComponent {
         
    constructor(private modal: ModalServices) { }
    
    @Input()
    filmItem!: Course
    
    editFilmItem(item: Course): void {
        this.modal.editShowModal()
        this.modal.errorTitleAdd(item)
    }

    deleteFilmItem(item: Course): void {
       this.modal.deleteShowModal(item)
    }

}
