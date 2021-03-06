import { Component } from '@angular/core';
import { loreMoreServices } from 'src/app/commons/services/lore-more.services';

@Component({
  selector: 'app-lore-more',
  templateUrl: './lore-more.component.html',
})
    
export class LoreMoreComponent {
    
  constructor(private LoreMoreServices: loreMoreServices) {}

  addCount() {
    this.LoreMoreServices.addCount();
  }
}
