import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { PopupConfirmComponent } from '../components/popup-confirm/popup-confirm.component';
import { PopupEditComponent } from '../components/popup-edit/popup-edit.component';
import { overlayInterface } from '../interface/overlayInterface';

type entryComponentsType = {
  [key: string]: Type<unknown>
};

@Injectable({ providedIn: 'root' })
export class OverlayServices {
    
  entryComponents: entryComponentsType = {
    Edit: PopupEditComponent,
    Confirm: PopupConfirmComponent,
  };

  layoutOverlay$: Subject<overlayInterface> = new Subject();
  
  showPopup(component: overlayInterface) {
    this.layoutOverlay$.next({ title: this.entryComponents[component.title], course: component.course });
  }
}
