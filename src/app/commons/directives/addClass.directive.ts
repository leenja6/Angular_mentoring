import { OnInit } from '@angular/core';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddClass]',
})

export class AddClassDirective implements OnInit {
  
  @Input('appAddClass') isTopRated: boolean = false;

  constructor(private element: ElementRef, private r: Renderer2) {}

  ngOnInit() {
    if (this.isTopRated) {
      this.r.addClass(this.element.nativeElement, 'active');
    } 
  } 
}
