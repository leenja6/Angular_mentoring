import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayContainerComponent } from './components/overlay-container/overlay-container.component';
import { PopupEditComponent } from './components/popup-edit/popup-edit.component';
import { PopupConfirmComponent } from './components/popup-confirm/popup-confirm.component';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [OverlayContainerComponent, PopupEditComponent, PopupConfirmComponent ],
  entryComponents: [PopupEditComponent, PopupConfirmComponent],
  imports: [CommonModule, CommonsModule],
  exports: [OverlayContainerComponent, PopupEditComponent, PopupConfirmComponent],    
})
    
export class ModalsModule {}
