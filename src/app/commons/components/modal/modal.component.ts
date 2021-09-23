import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { ModalServices } from '../../services/modal.services'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
  
export class ModalComponent implements OnInit{

@ViewChild('refModal', { read: ViewContainerRef, static: true }) refModal!: ViewContainerRef

constructor(public modal: ModalServices,) {}
     
  ngOnInit(): void{
    this.modal.init(this.refModal)
	}   
}

