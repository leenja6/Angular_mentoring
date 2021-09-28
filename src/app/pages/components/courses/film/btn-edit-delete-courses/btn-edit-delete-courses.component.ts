import { Component,  Input, Type  } from '@angular/core'
import { Course } from 'src/app/commons/interface/interface'
import { PopupConfirmComponent } from 'src/app/modals/components/popup-confirm/popup-confirm.component'
import { PopupEditComponent } from 'src/app/modals/components/popup-edit/popup-edit.component'
import { OverlayServices } from 'src/app/modals/services/overlay.services'

@Component({
    selector: 'app-btn-edit-delete-courses',
    templateUrl: './btn-edit-delete-courses.component.html',
})
export class BtnEditDeleteCoursesComponent {
     
    constructor(private overlayServices: OverlayServices) { }
    
    @Input()
    filmItem!: Course
    
    editFilmItem(item: Course): void {
        this.overlayServices.showPopup({title:'Edit', course:item})
    }

    deleteFilmItem(item: Course): void {
        this.overlayServices.showPopup({title:'Confirm', course:item})
    }

}
