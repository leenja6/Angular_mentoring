import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddBorder]',
})
  
export class AddBorderDirective implements OnInit {

  @Input('appAddBorder') coursesDate: any = '';

  years!: number;
    
  constructor(private element: ElementRef, private r: Renderer2) {}

  ngOnInit() {
    this.years = +new Date(this.coursesDate).getFullYear();
    if (this.years >= 2017) {
      this.r.addClass(this.element.nativeElement, 'green');
    }
  }
}
