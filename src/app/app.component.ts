import { Component } from '@angular/core'
import { ModalServices } from './commons/services/modal.services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(public modal: ModalServices){}
}
