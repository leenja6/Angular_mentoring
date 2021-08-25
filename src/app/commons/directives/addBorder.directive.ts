import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'

@Directive({
    selector: '[addBorder]',
})
export class addBorderDirective implements OnInit {
    @Input('addBorder') coursesDate: string = ''
    years!: number

    constructor(private element: ElementRef, private r: Renderer2) {}

    ngOnInit() {
        this.years = +this.coursesDate.slice(0, 4)
        if (this.years >= 2017) {
            this.r.addClass(this.element.nativeElement, 'green')
        }
    }
}
