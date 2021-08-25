import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class loreMoreServices {
    count: number = 3

    addCount() {
        this.count = this.count + 3
    }
}
