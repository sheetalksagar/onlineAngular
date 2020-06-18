import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.appSimpleStyle',
})
export class SimpleStyleDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'red';
  }
} 

// @Directive({})

// Obj types :  new 4, 3

// document.getEBId('appSimpleStyle).style.color="hotpink"
