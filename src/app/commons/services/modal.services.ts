import { ComponentFactoryResolver, ComponentRef, Injectable, ReflectiveInjector, ViewContainerRef } from "@angular/core"
import { ConfirmationDeleteComponent } from "src/app/pages/components/courses/film/сonfirmation-delete/сonfirmation-delete.component"
import { FormGroupComponent } from "../components/form-group/form-group.component"
import { Course } from "../interface/interface"

@Injectable({ providedIn: 'root' })
export class ModalServices {
    
    constructor(private resolver: ComponentFactoryResolver){}
    
    refModal!: ViewContainerRef

    modal: boolean = false
    
    title: string = 'Title'
    
    idCourse!: number
     
    coursesObj: Course = {
        id: -1,
        name: '',
        date: '',
        length: null,
        description: '',
        authors: [{lastName: '', id: 0, name: ''}],
        isTopRated: false
    }
    
    clearingData() {
        this.coursesObj = {
            id: -1,
            name: '',
            date: '',
            length: null,
            description: '',
            authors: [{lastName: '', id: 0, name: ''}],
            isTopRated: false
       }
    }

    errorTitleAdd(obj: Course) {
        this.coursesObj = obj
    }

    init(refModal: ViewContainerRef) {
        this.refModal = refModal
    }

    editShowModal() {
        this.title = 'Edit Courses'
        this.modal = true
        const addFactory = this.resolver.resolveComponentFactory(FormGroupComponent)
        setTimeout(() => this.refModal.createComponent(addFactory))
    }

    deleteShowModal(film: Course) {
        this.title = 'Delete Courses'
        this.modal = true
        this.idCourse = film.id
        const deleteFactory = this.resolver.resolveComponentFactory(ConfirmationDeleteComponent)
        setTimeout(() => this.refModal.createComponent(deleteFactory))
    }
    closeModal() {
        this.modal = false
        this.clearingData()
    }
}
 