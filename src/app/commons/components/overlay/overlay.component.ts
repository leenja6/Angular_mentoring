import { Component } from '@angular/core';
import { ModalServices } from '../../services/modal.services';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
})
  
export class OverlayComponent{
  constructor(public modal: ModalServices){}

}