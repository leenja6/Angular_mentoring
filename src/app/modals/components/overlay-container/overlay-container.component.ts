import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core'
import { CoursesServices } from 'src/app/commons/services/courses.services'
import { overlayInterface } from '../../interface/OverlayInterface'
import { OverlayServices } from '../../services/overlay.services'

@Component({
  selector: 'app-overlay-container',
  templateUrl: './overlay-container.component.html',
})
export class OverlayContainerComponent {
  
  
  @ViewChild('refModal', { read: ViewContainerRef, static: true }) refModal!: ViewContainerRef
  
  showOverlay: boolean = false
  
  constructor(
    private resolver: ComponentFactoryResolver,
    private overlayServices: OverlayServices,
    private courses: CoursesServices
  ){}
  
  ngOnInit() {
    this.overlayServices.layoutOverlay$.subscribe(data => {
      if (data.course) {
        this.courses.filmFormAdd(data.course)
      }
      this.ShowModal(data)
    })
    this.courses.closeModal$.subscribe(() => {
      this.closeModal()
    })
  }

  ShowModal(component: overlayInterface) {
    this.showOverlay = true
    const addFactory = this.resolver.resolveComponentFactory(component.title)
    this.refModal.createComponent(addFactory)
  }

  closeModal() {
    this.showOverlay = false    
    this.refModal.clear()
    if (this.courses.coursesObj.id !== -1) {
      this.courses.filmFormDelete()
    }
  }
}
