import { OnInit } from '@angular/core'
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core'

@Directive({
    selector: '[addclass]',
})
export class addClassDirective implements OnInit {
    @Input('addclass') isTopRated: boolean = false

    constructor(private element: ElementRef, private r: Renderer2) {}

    ngOnInit() {
        if (this.isTopRated)
            this.r.addClass(this.element.nativeElement, 'active')
    }
}
